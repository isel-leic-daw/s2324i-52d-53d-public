package com.example.demo

import org.springframework.http.converter.HttpMessageConverter
import org.springframework.stereotype.Component
import org.springframework.web.method.support.HandlerMethodArgumentResolver
import org.springframework.web.servlet.config.annotation.InterceptorRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer


@Component
class DemoConfigure : WebMvcConfigurer {

    override fun addArgumentResolvers(resolvers: MutableList<HandlerMethodArgumentResolver>) {
        resolvers.add(ClientIpExampleArgumentResolver())
    }

    override fun addInterceptors(registry: InterceptorRegistry) {
       registry.addInterceptor(ExampleInterceptor())
    }

    override fun configureMessageConverters(converters: MutableList<HttpMessageConverter<*>>) {
        converters.add(0,  UriToQrCodeMessageConverter())
    }

}