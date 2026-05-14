filter

@Bean
public FilterRegistrationBean<MultipartFilter> multipartFilterRegistrationBean() {
    FilterRegistrationBean<MultipartFilter> registrationBean = new FilterRegistrationBean<>();
    registrationBean.setFilter(new MultipartFilter());
    registrationBean.addUrlPatterns("/springrest/*");
    return registrationBean;
}
