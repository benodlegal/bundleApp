package com.tns.gen.com.telerik.android.common;

public class Function2 implements com.telerik.android.common.Function2 {
	public Function2() {
		com.tns.Runtime.initInstance(this);
	}

	public java.lang.Object apply(java.lang.Object param_0, java.lang.Object param_1)  {
		java.lang.Object[] args = new java.lang.Object[2];
		args[0] = param_0;
		args[1] = param_1;
		return (java.lang.Object)com.tns.Runtime.callJSMethod(this, "apply", java.lang.Object.class, args);
	}

}
