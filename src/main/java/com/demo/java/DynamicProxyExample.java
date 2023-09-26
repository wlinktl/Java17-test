package com.demo.java;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

interface MyInterface {
    void myMethod();
}

class MyInterfaceImpl implements MyInterface {
    public void myMethod() {
        System.out.println("Hello from MyInterfaceImpl!");
    }
}

class MyInvocationHandler implements InvocationHandler {
    private Object obj;

    public MyInvocationHandler(Object obj) {
        this.obj = obj;
    }

    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        System.out.println("Before invoking " + method.getName());
        Object result = method.invoke(obj, args);
        System.out.println("After invoking " + method.getName());
        return result;
    }
}

public class DynamicProxyExample {
    public static void main(String[] args) {
        MyInterfaceImpl obj = new MyInterfaceImpl();
        MyInvocationHandler handler = new MyInvocationHandler(obj);
        MyInterface proxyObj = (MyInterface) Proxy.newProxyInstance(MyInterface.class.getClassLoader(),
                new Class[] { MyInterface.class }, handler);
        proxyObj.myMethod();
    }
}