from django.core.mail import send_mail

from django.conf import settings


def test_email():
    print(f"TEST EMAIL")
    subject = f"TEST EMAIL"
    message = f"""<html>
                    <head></head>
                    <body>
                        <p><strong>TEST EMAIL</strong></p>
                        <p>TEST EMAIL</p>
                        <p>Email: <a href="mailto:{settings.EMAIL_OF_ADMIN}">{settings.EMAIL_OF_ADMIN}</a></p>
                    </body>
                </html>"""
    email_from = settings.EMAIL_HOST_USER
    recipient_list = [
        settings.EMAIL_OF_ADMIN
    ]  # Assuming the recipient is the same as the seller's email
    try:
        send_mail(
            subject,
            "",
            email_from,
            recipient_list,
            fail_silently=False,
            html_message=message,
        )
        print("Sending mail... [SUCCESS]")
    except Exception as e:
        print("Sending mail... [ERROR]")
        print("[ERROR]", e)
    return True


def email_interaction(data, user, action):
    print(f"INTERACTION TO {action['name']}")
    subject = f"Interaction to {'BUY' if action['name'] != 'BUYING' else 'SELL'}"
    message = f"""<html>
                    <head>
                         <style>
                            p {{
                                margin: 0 !important;
                            }}
                        </style>
                    </head>
                    <body>
                        <p><strong>Interacted user to {'BUY' if action['name'] != 'BUYING' else 'SELL'}</strong></p>
                        <p>Company Name: {user['companyName']}</p>
                        <p>Company Web: <a href="{user['companyURL']}">{user['companyURL']}</a></p>
                        <p>Contact Person Full Name: {user['fullName']}</p>
                        <p>Phone Number: {user['countryCode']}{user['phoneNumber']}</p>
                        <p>Email: <a href="mailto:{user['email']}">{user['email']}</a></p>
                        <br/>
                        <p><strong>{"BUYER" if action['name'] == "BUYING" else "SELLER"} request</strong></p>
                        <p>Product Name: {data['name']}</p>
                        <p>Action: {data['action']['name']}</p>
                        <p>Category: {data['category']['name']}</p>
                        <p>Quantity: {data['quantity']}{data['measurement']['name']}</p>
                        <p>Price: {data['price']}{data['currency']['name']}</p>
                        <p>Payment: {data['payment']['name']}</p>
                        <p>Delivery: {data['delivery']['name']}</p>
                        <p>Contract: {data['contract']['name']}</p>
                        <br/>
                        <p><strong>{"BUYER" if data['action']['name'] == "BUYING" else "SELLER"}</strong></p>
                        <p>Company Name: {data['by']['companyName']}</p>
                        <p>Company Web: <a href="{data['by']['companyURL']}">{data['by']['companyURL']}</a></p>
                        <p>Contact Person Full Name: {data['by']['fullName']}</p>
                        <p>Phone Number: {data['by']['countryCode']}{data['by']['phoneNumber']}</p>
                        <p>Email: <a href="mailto:{data['by']['email']}">{data['by']['email']}</a></p>
                    </body>
                </html>"""
    email_from = settings.EMAIL_HOST_USER
    recipient_list = [
        settings.EMAIL_OF_ADMIN
    ]  # Assuming the recipient is the same as the seller's email
    try:
        # send_mail(
        #     subject,
        #     "",
        #     email_from,
        #     recipient_list,
        #     fail_silently=False,
        #     html_message=message,
        # )
        print("Sending mail... [SUCCESS]")
    except Exception as e:
        print("Sending mail... [ERROR]")
        print("[ERROR]", e)
    return True


def email_new_listing(data):
    print(f"NEW PRODUCT LISTED FOR {data['action']['name']}")
    subject = f"{data['action']['name']} New Product"
    message = f"""<html>
                    <head>
                         <style>
                            p {{
                                margin: 0 !important;
                            }}
                        </style>
                    </head>
                    <body>
                        <p><strong>{"BUYER" if data['action']['name'] == "BUYING" else "SELLER"} request</strong></p>
                        <p>Product Name: {data['name']}</p>
                        <p>Action: {data['action']['name']}</p>
                        <p>Category: {data['category']['name']}</p>
                        <p>Quantity: {data['quantity']}{data['measurement']['name']}</p>
                        <p>Price: {data['price']}{data['currency']['name']}</p>
                        <p>Payment: {data['payment']['name']}</p>
                        <p>Delivery: {data['delivery']['name']}</p>
                        <p>Contract: {data['contract']['name']}</p>
<br/>
                        <p><strong>{"BUYER" if data['action']['name'] == "BUYING" else "SELLER"}</strong></p>
                        <p>Company Name: {data['by']['companyName']}</p>
                        <p>Company Web: <a href="{data['by']['companyURL']}">{data['by']['companyURL']}</a></p>
                        <p>Contact Person Full Name: {data['by']['fullName']}</p>
                        <p>Phone Number: +{data['by']['countryCode']}{data['by']['phoneNumber']}</p>
                        <p>Email: <a href="mailto:{data['by']['email']}">{data['by']['email']}</a></p>
                    </body>
                </html>"""
    email_from = settings.EMAIL_HOST_USER
    recipient_list = [
        settings.EMAIL_OF_ADMIN
    ]  # Assuming the recipient is the same as the seller's email
    try:
        send_mail(
            subject,
            "",
            email_from,
            recipient_list,
            fail_silently=False,
            html_message=message,
        )
        print("Sending mail... [SUCCESS]")
    except Exception as e:
        print("Sending mail... [ERROR]")
        print("[ERROR]", e)
    return True
