// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

// {fact rule=java-inheritable-thread-local@v1.0 defects=0}
import com.amazon.coral.metrics.Metrics;
import java.lang.InheritableThreadLocal;
import java.lang.ThreadLocal;

public class InheritableThreadLocalCoralCompliant {

    public compliant() {
        // Compliant: Using `ThreadLocal` instead of `InheritableThreadLocal` with async concurrent clients helps prevent accidentally sharing thread-local context with other threads in the thread pool.
        ThreadLocal<Metrics> threadLocalMetrics = new ThreadLocal<>();
    }
}
// {/fact}