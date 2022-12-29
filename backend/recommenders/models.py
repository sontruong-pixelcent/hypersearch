import os
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import pickle
import pandas as pd

module_dir = os.path.dirname(__file__)  # get current directory


# Khi server mở thì đọc file để load model:
def load_model():
    tfidf_name_des = None
    with (open(os.path.join(module_dir, "tfidf_name_des.pickle"), "rb")) as openfile:
        while True:
            try:
                tfidf_name_des = pickle.load(openfile)
            except EOFError:
                break

    tfidf_readme = None
    with (open(os.path.join(module_dir, "tfidf_readme.pickle"), "rb")) as openfile:
        while True:
            try:
                tfidf_readme = pickle.load(openfile)
            except EOFError:
                break

    return tfidf_name_des, tfidf_readme


tfidf_name_des, tfidf_readme = load_model()
cosine_sim_name_des = cosine_similarity(tfidf_name_des, tfidf_name_des)
cosine_sim_readme = cosine_similarity(tfidf_readme, tfidf_readme)
indices = pd.Series([i for i in range(0, 1800)],
                    index=[j for j in range(1, 1801)])

# Mỗi lần request get detail của 1 package, get từ database, lấy field Index của package đó ra và truyền vào title_idx


def improved_recommendations_2(title_idx, filter_by='readme', return_count=10):
    '''
    - filter_by : chọn loại để recoomend, ví dụ 'readme' (default), 'name_des'
    - return_count : số lượng trả về
    '''

    idx = indices[title_idx]
    sim_scores = None
    if filter_by == 'readme':
        sim_scores = list(enumerate(cosine_sim_readme[idx]))
    elif filter_by == 'name_des':
        sim_scores = list(enumerate(cosine_sim_name_des[idx]))

    assert sim_scores != None, 'score list can not be Null'
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1: return_count + 1]
    package_indices = [i[0] for i in sim_scores]
    return package_indices
