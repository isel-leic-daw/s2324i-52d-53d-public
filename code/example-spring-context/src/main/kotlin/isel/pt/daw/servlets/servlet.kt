package isel.pt.daw

import jakarta.servlet.FilterChain
import jakarta.servlet.http.HttpFilter
import jakarta.servlet.http.HttpServlet
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.slf4j.Logger
import org.slf4j.LoggerFactory

/**
 * The servlet API (interfaces and base classes) were initially defined by [Java Enterprise Edition]
 * (https://www.oracle.com/java/technologies/java-ee-glance.html).
 * They are now maintained by project [Jakarta](https://projects.eclipse.org/projects/ee4j)
 *
 */
class ExampleServet : HttpServlet() {

    override fun doGet(request: HttpServletRequest, response: HttpServletResponse) {
        log.info("doGet: method='{}', uri='{}'", request.method, request.requestURI)

        response.status = 200
        response.addHeader("Content-Type", "text/plain; charset=utf-8")
        response.outputStream.apply {
            write("Olá mundo".toByteArray(Charsets.UTF_8))
            flush()
        }
        log.info("doGet: ending")
    }

    companion object {
        private val log: Logger = LoggerFactory.getLogger(ExampleServet::class.java)
    }
}
class ExampleFilter : HttpFilter() {
    override fun doFilter(request: HttpServletRequest, response: HttpServletResponse, chain: FilterChain) {
        log.info("doFilter: before chain call")
        chain.doFilter(request, response)
        log.info("doFilter: after chain call")
    }
    companion object {
        private val log: Logger = LoggerFactory.getLogger(ExampleFilter::class.java)
    }
}
