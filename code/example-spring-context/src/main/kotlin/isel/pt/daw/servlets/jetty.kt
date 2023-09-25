package isel.pt.daw

import jakarta.servlet.DispatcherType
import org.eclipse.jetty.server.Server
import org.eclipse.jetty.server.ServerConnector
import org.eclipse.jetty.servlet.ServletContextHandler
import org.eclipse.jetty.servlet.ServletHolder
import org.slf4j.LoggerFactory
import java.util.*

private val log = LoggerFactory.getLogger("main")

/**
 * Creating a server using the Jetty library.
 * Based on based on:
 * [https://www.eclipse.org/jetty/documentation/jetty-11/programming-guide/index.html#pg-server-http-handler-use-servlet]
 */
fun main() {

    log.info("started")
    val server = Server(9000)
    val connector = ServerConnector(server)
    server.addConnector(connector)
    val handler = ServletContextHandler()
    handler.addServlet(ServletHolder(ExampleServet()), "/*")
    handler.addFilter(ExampleFilter::class.java, "/*", EnumSet.of(DispatcherType.REQUEST))
    server.handler = handler

    server.start()
    server.join()
}




