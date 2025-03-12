from pathlib import Path
import os
from dotenv import load_dotenv

dotenv_path = os.path.join(os.path.dirname(__file__), ".env")
BASE_DIR = Path(__file__).resolve().parent.parent
SECRET_KEY = os.getenv(
    "DJANGO_SECRET_KEY",
    "django-insecure-9&qjfv+l3pbt19l@#v67j#j2sks+1jklg^*e^^8rw9#&&^yd2d",
)
DEBUG = os.getenv("DEBUG", "True") == "True"
CORS_ORIGIN_ALLOW_ALL = bool(os.getenv("CORS_ORIGIN_ALLOW_ALL", "True"))
USE_X_FORWARDED_HOST = bool(os.getenv("USE_X_FORWARDED_HOST", "False"))
SECURE_PROXY_SSL_HEADER = tuple(
    os.getenv("SECURE_PROXY_SSL_HEADER", "HTTP_X_FORWARDED_PROTO,http").split(",")
)
ALLOWED_HOSTS = tuple(
    os.getenv("ALLOWED_HOSTS", "localhost,127.0.0.1,0.0.0.0").split(",")
)
# CSRF_COOKIE_SECURE = bool(os.getenv("CSRF_COOKIE_SECURE", "False"))
# SESSION_COOKIE_SECURE = bool(os.getenv("SESSION_COOKIE_SECURE", "False"))

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "corsheaders",
    "graphene_django",
]

GRAPHENE = {"SCHEMA": "config.schema.schema"}

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "config.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "config.wsgi.application"

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql_psycopg2",
        "NAME": os.getenv("PSQL_DB_NAME"),
        "USER": os.getenv("PSQL_DB_USER"),
        "PASSWORD": os.getenv("PSQL_DB_PASSWORD"),
        "HOST": os.getenv("PSQL_DB_HOST"),
        "PORT": os.getenv("PSQL_DB_PORT"),
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]

LANGUAGE_CODE = "en-us"
TIME_ZONE = "UTC"
USE_I18N = True
USE_TZ = True

STATIC_URL = "/django_static/"
STATIC_ROOT = BASE_DIR / "django_static"
MEDIA_URL = "/media/"
MEDIA_ROOT = BASE_DIR / "media"

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"
