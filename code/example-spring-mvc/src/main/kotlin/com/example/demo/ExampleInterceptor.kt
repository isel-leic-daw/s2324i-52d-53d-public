package com.example.demo

import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.util.StopWatch
import org.springframework.web.method.HandlerMethod
import org.springframework.web.servlet.HandlerInterceptor
import org.springframework.web.servlet.ModelAndView


class ExampleInterceptor : HandlerInterceptor {

    override fun preHandle(
        request: HttpServletRequest,
        response: HttpServletResponse,
        handler: Any): Boolean {

        logger.info("on preHandle")
        logger.info("Before calling $handler (${handler.javaClass.name})")
        if(handler is HandlerMethod) {
            logger.info("Before calling ${handler.method.name}")
        }
        return true
    }

    override fun postHandle(
        request: HttpServletRequest,
        response: HttpServletResponse,
        handler: Any,
        modelAndView: ModelAndView?
    ) {
        logger.info("on postHandle")
        logger.info("After calling $handler")
    }

    companion object {

        private val logger: Logger = LoggerFactory.getLogger(ExampleInterceptor::class.java)
    }

}