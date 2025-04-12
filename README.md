# Markdown-Web

A web application for managing and editing markdown documents built with Laravel and React.

## Features

- Create, edit, and organize markdown documents
- Modern, responsive user interface
- Real-time preview of markdown content
- User authentication and document sharing
- File uploads and management

## Requirements

- PHP 8.4
- Composer
- Node.js (16+) and npm
- Docker (for Sail setup)

## Installation

### Using Laravel Sail (recommended)

Laravel Sail provides a lightweight command-line interface for interacting with Laravel's Docker development environment.

1. Clone the repository:
```bash
git clone git@github.com:markheramis/markdown-web.git
cd markdown-web
```

2. Install PHP dependencies via Docker:
```bash
docker run --rm \
    -v "$(pwd)":/opt \
    -w /opt \
    laravelsail/php84-composer:latest \
    composer install --ignore-platform-reqs
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Start Sail:
```bash
./vendor/bin/sail up -d
```

5. Generate application key:
```bash
./vendor/bin/sail artisan key:generate
```

6. Run migrations:
```bash
./vendor/bin/sail artisan migrate
```

7. Install and build frontend assets:
```bash
./vendor/bin/sail npm install
./vendor/bin/sail npm run dev
```

8. Access the application at http://localhost

### Without Sail (Traditional Setup)

1. Clone the repository:
```bash
git clone <repository-url>
cd markdown-web
```

2. Install PHP dependencies:
```bash
composer install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Generate application key:
```bash
php artisan key:generate
```

5. Configure your database in the .env file and run migrations:
```bash
php artisan migrate
```

6. Install and build frontend assets:
```bash
npm install
npm run dev
```

7. Start the development server:
```bash
php artisan serve
```

8. Access the application at http://localhost:8000

## Development

To run the development server:

### Using Sail
```bash
./vendor/bin/sail up -d
./vendor/bin/sail npm run dev
```

### Without Sail
```bash
php artisan serve
npm run dev
```

## Testing

### Using Sail
```bash
./vendor/bin/sail artisan test
```

### Without Sail
```bash
php artisan test
```

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT). 
