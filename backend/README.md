# Hypersearch Backend

## Setup

### For mac:
- Python setup:
    1. Create virtual env by running `python3 -m venv env`
    2. Activate virtual env `source env/bin/activate`

- Database setup:
    1. Activate virtual env `source env/bin/activate` if not activated yet
    2. Install PostgreSQL
    3. Create `hypersearch` database
    3. `cd backend && python manage.py migrate`

## Run the application
- After activating the virtual env, run the application by:
1. `cd backend`
2. `python manage.py runserver`
3. Open `http://127.0.0.1:8000/`
