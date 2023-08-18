from django.core.mail import send_mail

from django.conf import settings


def send_forget_password_mail(email, token, client_url="http://127.0.0.1:5173/"):
    print("Sending mail... [PENDING]")
    subject = "Please Reset Your Password"
    message = f"We heard that you lost your password. Sorry about that! But don’t worry! You can use this link to reset your password : {client_url}reset/{token}"
    email_from = settings.EMAIL_HOST_USER
    recipient_list = [email]
    try:
        send_mail(subject, message, email_from, recipient_list, fail_silently=False)
        print("Sending mail... [SUCCESS]")
    except Exception as e:
        print("Sending mail... [ERROR]")
        print("[ERROR]", e)
    return True


def send_email_verfication_mail(email, token, client_url="http://127.0.0.1:5173/"):
    print("Sending mail... [PENDING]")
    subject = "Please Verify Your Email"
    message = f"Welcome to Stankevicius! To get started, please verify your email address by clicking the link below:\n\n{client_url}verify/{token}\n\nThank you for joining us!"
    email_from = settings.EMAIL_HOST_USER
    recipient_list = [email]
    try:
        send_mail(subject, message, email_from, recipient_list, fail_silently=False)
        print("Sending mail... [SUCCESS]")
    except Exception as e:
        print("Sending mail... [ERROR]")
        print("[ERROR]", e)
    return True
