package isel.pt.daw.context.e2.exercise

import org.slf4j.LoggerFactory
import org.springframework.context.annotation.AnnotationConfigApplicationContext
import org.springframework.stereotype.Component
import org.springframework.beans.factory.getBean

private val log = LoggerFactory.getLogger("main")

interface LanguageTranslator {
    fun translate(englishWord: String): String?
    val targetLanguage: String
}

@Component
class Translator(){
    //private val map: Map<String, LanguageTranslator>



    fun translate(englishWord: String, targetLanguage: String){}

}

fun main() {
    log.info("started")
    // Create the context
    val context = AnnotationConfigApplicationContext()
    // Scan a package for all @Component annotated classes
    context.scan()
    // Refresh the context to take into consideration the new bean definitions
    context.refresh()
    // Get a bean
    val translator = context.getBean<Translator>()

    println(translator.translate("Hello", "pt")) //Olá
    println(translator.translate("Hello", "es")) //Hola
    println(translator.translate("Hello", "sv")) //HALLÅ


}