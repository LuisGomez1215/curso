import pandas as pd
import pywhatkit
import time

# Leer el archivo Excel
contactos = pd.read_excel('python\contactos.xlsx')

# Intervalo de tiempo entre mensajes (en segundos)
intervalo_segundos = 10  # Ajusta según prefieras

for index, contacto in contactos.iterrows():
    # Convertir teléfono a string y asegurarse que empiece con "+"
    telefono = str(contacto['Telefono'])
    if not telefono.startswith('+'):
        telefono = '+' + telefono

    mensaje = contacto['Mensaje personalizado']

    # Envío inmediato (no necesitas programar hora)
    pywhatkit.sendwhatmsg_instantly(
        telefono, mensaje,
        wait_time=20,  # Tiempo de espera para que cargue WhatsApp Web (ajusta si es lento)
        tab_close=True
    )

    print(f"Mensaje enviado a {telefono}")

    # Esperar entre mensajes
    time.sleep(intervalo_segundos)

print("✅ Todos los mensajes fueron enviados.")
