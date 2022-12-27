# Hypersearch Backend

## Setup

### For mac:
- Python setup:
    1. Create virtual env by running `python3 -m venv env`
    2. Activate virtual env `source env/bin/activate`
    3. Install dependencies `pip3 install -r requirements.txt`

- Database setup:
    1. Activate virtual env `source env/bin/activate` if not activated yet
    2. Install PostgreSQL
    3. Create `hypersearch` database
    4. `cd backend && python manage.py migrate`
    5. Download this dump file: [hypersearch_dump](https://drive.google.com/file/d/1yvodigrr4k162tw9-m1yXjDU4Xde-EdH/view?usp=share_link)
    6. On terminal, use `psql -d hypersearch -f <path-to-hypsearch_dump_file>`

## Run the application
- After activating the virtual env, run the application by:
1. `cd backend`
2. `python manage.py runserver`
3. Open `http://127.0.0.1:8000/`
