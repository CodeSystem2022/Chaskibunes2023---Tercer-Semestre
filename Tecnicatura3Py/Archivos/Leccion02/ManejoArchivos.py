class ManejoArchivos:
    def __init__(self, nombre):
        self.nombre = nombre

    def __enter__(self):
        print('Obtenemos el recurso'.center(50, '_'))
        self.nombre = open(self.nombre, 'r', encoding='utf8') #Encapsulamos el código del método
        return self.nombre
    
    def __exit__(self, tipo_exception, valor_exception, taza_error):
        print('cerramos el recurso'.center(50,'_'))
        if self.nombre:
            self.nombre.close() #Cerramos el archivo