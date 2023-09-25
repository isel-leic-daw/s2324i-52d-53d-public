package com.example.demo

import jakarta.servlet.FilterChain
import jakarta.servlet.http.HttpFilter
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse

import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.core.annotation.Order
import org.springframework.stereotype.Component

@Component
@Order(1)
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