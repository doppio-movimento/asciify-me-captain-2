import os
from datetime import timedelta
from pathlib import Path

import stripe
from dotenv import load_dotenv

# dotenv_path = os.path.join(os.path.dirname(__file__), ".env")

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = os.getenv(
    "DJANGO_SECRET_KEY",
    "django-insecure-9&qjfv+l3pbt19l@#v67j#j2sks+1jklg^*e^^8rw9#&&^yd2d",
)
DEBUG = os.getenv("DJANGO_DEBUG", "True") == "True"
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
#CORS_ALLOWED_ORIGINS = tuple(os.getenv("CORS_ALLOWED_ORIGINS", "").split(","))

stripe.api_key = os.getenv("STRIPE_API_KEY")

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "rest_framework",
    "rest_framework_simplejwt.token_blacklist",
    "corsheaders",
    "ascii_transforms",
    "funds",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "djangorestframework_camel_case.middleware.CamelCaseMiddleWare",
]

REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": [
        "rest_framework_simplejwt.authentication.JWTAuthentication",
    ],
    "DEFAULT_RENDERER_CLASSES": (
        "djangorestframework_camel_case.render.CamelCaseJSONRenderer",
        "djangorestframework_camel_case.render.CamelCaseBrowsableAPIRenderer",
    ),
    "DEFAULT_PARSER_CLASSES": (
        "djangorestframework_camel_case.parser.CamelCaseFormParser",
        "djangorestframework_camel_case.parser.CamelCaseMultiPartParser",
        "djangorestframework_camel_case.parser.CamelCaseJSONParser",
    ),
}

SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=20),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=3),
    "SIGNING_KEY": os.getenv("SIMPLE_JWT_SIGNING_KEY", default=None) or SECRET_KEY,
    "ROTATE_REFRESH_TOKENS": True,
    "BLACKLIST_AFTER_ROTATION": True,
}

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
        "NAME": os.getenv("POSTGRES_DB", "asciifydb"),
        "USER": os.getenv("POSTGRES_USER", "ascii"),
        "PASSWORD": os.getenv("POSTGRES_PASSWORD", "ilikecheese"),
        "HOST": os.getenv("POSTGRES_HOST", "localhost"),
        "PORT": os.getenv("POSTGRES_PORT", "5432"),
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
