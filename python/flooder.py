from time import sleep
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import smtplib, getpass

msg = MIMEMultipart()

email = input("email>")
senha  = getpass.getpass("senha>")

o = smtplib.SMTP_SSL("smtp.gmail.com", 465)
o.login(email, senha)

msg['From'] = email
msg['Subject'] = "Can i get a cookie ? "
 
target_email = input("e-mail alvo>")

msg['To'] = target_email
msg.attach(MIMEText("please ?",'plain'))


while True:
    o.sendmail(email, target_email, msg.as_string())
    print("OK")
    sleep(30)
