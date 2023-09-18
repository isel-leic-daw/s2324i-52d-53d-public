package isel.pt.daw.context.e2.listsAbstract

import org.slf4j.LoggerFactory
import org.springframework.context.annotation.AnnotationConfigApplicationContext
import org.springframework.stereotype.Component
import org.springframework.beans.factory.getBean

private val log = LoggerFactory.getLogger("main")

interface InterfaceA {
    fun m() : String
}

@Component
class ComponentA : InterfaceA {
    override fun m() = "Component A"
}

@Component
class ComponentB : InterfaceA {
    override fun m() = "Component B"
}

@Component
class ComponentWithList(
    val list: List<InterfaceA>
){
    fun print() {
        list.forEach{ println(it.m())}
    }
}

fun main() {
    log.info("started")
    // Create the context
    val context = AnnotationConfigApplicationContext()
    // Scan a package for all @Component annotated classes
    context.scan("isel.pt.daw.context.e2.listsAbstract")
    // Refresh the context to take into consideration the new bean definitions
    context.refresh()
    // Get a bean
    val listComponent = context.getBean<ComponentWithList>()

    listComponent.print()

}