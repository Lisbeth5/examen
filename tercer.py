import tkinter
#crear ventana
ventana = tkinter.Tk()
ventana.geometry("500x300")


#funcion
def saludo(nombre):
    print("hola" + nombre)

boton1 = tkinter.Button(ventana, text = "click", command = lambda: saludo("python"))
boton1.pack()

etiqueta = tkinter.Label(ventana, text= "hola mundo", bg= "green")
#etiqueta.pack(side=tkinter.BOTTOM)
#etiqueta.pack(fill = tkinter.X)
#etiqueta.pack(fill = tkinter.Y, expand = True)
etiqueta.pack(fill = tkinter.BOTH, expand = True)
ventana.mainloop()