import logging as log

#doc.python.org/3/howto/loggin.html
# Llamamos una configuración básica

log.basicConfig(level=log.DEBUG,
                format='%(asctime)s:%(levelname)s [%(filename)s:%(lineno)s] %(message)s',
                datefmt='%I:%M:%S %p',
                handlers=[
                    log.FileHandler('capa_datos.log', encodig='utf8'),
                    log.StreamHandler()
                ])
if __name__ == '__main__' :
    #todos los niveles 
    log.debug('Mensaje a nivel debug')                 
    log.info('Mensaje a nivel info')           
    log.warning('Mensaje a nivel error')           
    log.error('Mensaje a nivel error')             
    log.critical('Mensaje a nivel critical')           
