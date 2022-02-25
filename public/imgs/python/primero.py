



morse = {
    "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".", "f": "..-.", 
    "g": "--.", "h": "....", "i": "..", "j": "·---", "k": "-.-", "l": ".-..", 
    "m": "--", "n": "-.", "ñ": "--.--", "o": "---", "p": ".__.", "q": "--.-",
    "r": ".-.", "s": "...", "t": "-", "u": "..-", "v": "...-", "w": ".--",
    "x": "-..-", "y": "-.--", "z": "--..",
    
    "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-", 
    "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
    
}



morse2 = {
    ".-": "a", "-...": "b", "-.-.": "c", "-..": "d", ".": "e", "..-.": "f", 
    "--.": "g", "....": "h", "..": "i", "·---": "j", "-.-": "k", ".-..": "l", 
    
    "--": "m", "-.": "n", "--.--": "ñ", "---": "o", ".__.": "p", "--.-": "q",
    
    ".-.": "r", "...": "s", "-": "t", "..-": "u", "...-": "v", ".--": "w",
    "x": "-..-", "y": "-.--", "z": "--..",
    
    "-----": "0", ".----": "1", "..---": "2", "...--": "3", "....-": "4", 
    ".....": "5", "-....": "6", "--...": "7", "---..": "8", "----.": "9",
    
}











class Clave1:
    
   
    def datos(self):
      self.palabra = input("digite una palabra u texto: ")
        
        
    def configMorse(self):
        texto = " "
        for i in self.palabra:
          if i != " " and i.lower() in morse:
            texto +=morse[i.lower()]
          else:
            texto += i
            
        print("Texto codificado: ",texto)
        
        
    def configurarMorse2(self):
        texto = " "
        for i in self.palabra:
          if i != " " and i.lower() in morse2:
            texto +=morse2[i.lower()]
          else:
            texto += i
            
        print("Texto codificado: ",texto)
        
        
        



dato=Clave1();
dato.datos();
#dato.configMorse()#configura de español a morse
dato.configurarMorse2(); #de morse a español



        