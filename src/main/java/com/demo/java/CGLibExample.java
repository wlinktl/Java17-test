package com.demo.java;

import java.lang.reflect.Method;

import net.sf.cglib.proxy.Enhancer;
import net.sf.cglib.proxy.MethodInterceptor;
import net.sf.cglib.proxy.MethodProxy;

class MyClass {
    public void myMethod() {
        System.out.println("Hello from MyClass!");
    }
}

class MyMethodInterceptor implements MethodInterceptor {
    public Object intercept(Object obj, Method method, Object[] args, MethodProxy proxy) throws Throwable {
        System.out.println("Before invoking " + method.getName());
        Object result = proxy.invokeSuper(obj, args);
        System.out.println("After invoking " + method.getName());
        return result;
    }
}

public class CGLibExample {
    public static void main(String[] args) {
        Enhancer enhancer = new Enhancer();
        enhancer.setSuperclass(MyClass.class);
        enhancer.setCallback(new MyMethodInterceptor());
        MyClass proxyObj = (MyClass) enhancer.create();
        proxyObj.myMethod();
    }
}