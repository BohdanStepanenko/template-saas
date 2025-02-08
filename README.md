# SaaS template

## Description

### Template with configured setting for fast start to SaaS development:
1. Installed cs-fixer
2. Installed Laravel Request Docs (/api/request-docs)
3. Makefile created
4. Testing environment created
5. Backend covered by tests
6. Template for frontend container (React)

### Already has backend Auth and Profile flow, including:
1. Registration
2. Login
3. Sign-in/Sign-up with Google and Discord
4. Email validation
5. Forgot/Reset password
6. Logout
7. Update profile name, email (with revalidation) and password
8. Upload and delete avatar (S3)


## Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:BohdanStepanenko/template-saas.git
 
2. Go to project directory:
   ```bash
   cd template-saas

3. Copy example environment file and fill with keys:
   ```bash
   cp .env.example .env

4. Up Docker containers:
   ```bash
   make up

5. Go to app container:
   ```bash
   make connect_app

6. Generate app key:
   ```bash
   php artisan key:generate
   exit
   
7. Run migrations and seeders, install Passport:
   ```bash
   make fresh

8. Install composer dependencies:
   ```bash
   make vendor
   

## Options

1. Check backend by cs-fixer:
   ```bash
   make cs_check

2. Fix backend by cs-fixer:
   ```bash
   make cs_fix

3. Run backend tests:
   ```bash
   make test

4. Go to app container command line:
   ```bash
   make connect_app