filter

@Bean
public FilterRegistrationBean<MultipartFilter> multipartFilterRegistrationBean() {
    FilterRegistrationBean<MultipartFilter> registrationBean = new FilterRegistrationBean<>();
    registrationBean.setFilter(new MultipartFilter());
    registrationBean.addUrlPatterns("/springrest/*");
    return registrationBean;
}


@SpringBootApplication
// Must extend this class for external Tomcat to find your config
public class MyWebApplication extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        // This replaces the contextConfigLocation param from image_87499c.png
        // It tells Spring to include TestWebConfigurer in the startup
        return builder.sources(MyWebApplication.class, TestWebConfigurer.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(MyWebApplication.class, args);
    }
}


@Configuration
@EnableWebMvc
@ComponentScan(basePackages = "com.yourproject")
public class TestWebConfigurer implements WebMvcConfigurer {
    // Your JSP view resolver and other bean definitions here
}




