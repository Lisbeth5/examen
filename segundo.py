# En este juego, se harán preguntas al usuario y se le darán opciones para elegir la respuesta correcta. A continuación, te presento un ejemplo de cómo puedes hacerlo:

import random

#Definimos una lista de preguntas con sus opciones y respuestas correctas

preguntas= [
    {
        'pregunta': '¿Cuál es la capital de Francia?',
        'opciones': ['Madrid', 'París', 'Berlín', 'Lonres'],
        'respuesta_correcta':'París'
    },
    {
        'pregunta': "¿Cuál es el río más largo del mundo?",
        'opciones': ['Nilo', 'Amazonas','Yagtsé','Misisipi'],
        'respuesta_correcta':'Amazonas'
    },
    {
        'pregunta':"¿Cual es la formula del agua",
        'opciones':['H2O+NaOH' ,'H2O','Na3CO3' + 'HCl'],
        'respuesta_correcta':'H2O'
    },
    {
        'pregunta':"¿En que año comenzó la Segunda Guerra Mundial?",
        'opciones': ['1939','1941','1945','1935'],
        'respuesta_correcta':"1939"
    },
    {
        'pregunta':'¿Cúal es el planeta más grande del Sistema Solar?',
        'opciones': ['Tierra','Jupiter','Saturno','Neptuno'],
        'respuesta_correcta':"Jupiter"
    }
]

#Función para presentar una pregunta al usuario y recibir su respuesta.
def presentar_pregunta(pregunta, opciones):
    print(pregunta)
    for i, opcion in enumerate(opciones,start=1):
        print(f"{i}.{opcion}")
    respuesta_usuario = input("Ingrese el número de la opción correcta: ")
    return respuesta_usuario
#Función para verificar si la respuesta del usuario es correcta.
def verificar_respuesta(respuesta_usuario, respuesta_correcta):
    return respuesta_usuario == respuesta_correcta

#Funcion principal del juego.
def juego_de_preguntas(preguntas):
    random.shuffle(preguntas)#Barajamos las preguntas para que no aparezcan en el mismo orden
    puntaje = 0
    
    print("Bienvenido al juego de preguntas. Responde correctamente para ganar puntos!")
    
    for pregunta in preguntas:
        pregunta_actual = pregunta['pregunta']
        opciones = pregunta['opciones']
        respuesta_correcta = pregunta['respuesta_correcta']
        
        respuesta_usuario = presentar_pregunta(pregunta_actual, opciones)
        
        if verificar_respuesta(respuesta_usuario, str(opciones.index(respuesta_correcta)+1)):
            print("¡Respuesta Correcta! +10 puntos \n")
            puntaje += 10
        else:
            print(f"Respuesta Incorrecta. La respuesta correcta era: {respuesta_correcta}\n")
    print(f"¡Juego terminado! Tu puntaje final es: {puntaje} puntos") 
    
#Ejecutamos el juego
juego_de_preguntas(preguntas)   

#Saluds :)