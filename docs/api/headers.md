---
title: Headers Reference
sidebar_label: Headers
---

Each pipeline can have **optional** headers defined. A pipeline header is similar to a HTTP header and defines a global “configuration item” for the overall execution of the pipeline. In the example below, you can see a pipeline with a header defined in the `headers` section:

```yaml
headers:
  description: "This is the hello world pipeline"
  
pipeline:
  - log:
      message: "The value of header 'description' is: #{headers.description}"
```

:::tip
You can access the header values using the ``headers`` scope in a [Pipeline Expression (PE)](../api/pel).
:::

## Headers Reference

It is possible to create custom headers, and there are some pre-defined headers. Below, you can find a reference for the pre-defined headers and their meanings.

### apiVersion

It defines the version of the pipeline API to be used (for example: `v2`, `v3`). If not set, the latest version is used automatically.    
                                                                                        
### authorization

It defines the authorization to be used for this pipeline. This has similar meaning as the HTTP `Authorization` header. The possible values are:

*   `RunAs USERNAME`: This executes the given pipeline as user with a given username. This requires a valid seed authentication or a call from a trusted service.
*   `Bearer TOKEN`: This uses the given (JWT) token for authentication.
*   `Basic CREDENTIALS`: This uses the given credentials for authentication.

In case no authentication header is set in current pipeline, the existing authentication from the HTTP header or from the backend will be used instead. 

### description

It is an optional description of this pipeline. The text may contain at max. 250 characters. This description is also used in logs and descriptions wherever possible.                                                                                                 

### exprPrefix

Sometimes, it is necessary to change the default prefix `#{` of an expression to a different value. For example, if this clashes with some other expression engines. Example:<br/><br/>`expPrefix: "$"` 

### mocksEnabled

In case this pipline contains command mocks using [``mock.command``](../api/commands#mockcommand-v1), this header can switch on / off all mocks at once using a value of ``true`` or ``false``.                                                                                                     

### onCommandError

This is an optional value to define what should happen if a single command in this pipeline has an error / exception. Possible values are:

  * **`IGNORE`**: Only the exception message (not the full stacktrace) is logged as warn, but no exception is thrown. So, next command in the pipeline will be executed.
  * **`LOG`**: The full stacktrace of the exception is logged as an error, but no exception is thrown. So, next command in the pipeline will be executed.
  * **`THROW`**: An exception is thrown, and the pipeline execution is stopped at this command. This is the default behavior in case this header doesnt exist or is empty.
  * **`RETRY; times=3; wait=2; then=THROW;`** If command caused an error, the command is again executed whereas all parameters are optional:
    *   `wait`: the time to wait in seconds before the next retry starts (default = 3).
    *   `times`: the number of retries before giving up (default = 1).
    *   `then`: the action to do after the retry was not successfull (one of `IGNORE`, `LOG`, or `THROW`)(default = `THROW`).
  *   **`ROLLBACK[uri]`**: This calls the given uri in order to cause a script to rollback. EXPERIMENTAL (ask our support team, if you want use this)
  *   **`runAs`**: DEPRECATED Since version 7.0. Use the command `iam.run.as` or the pipeline header `Authorization: RunAs USERNAME` instead. A username of a user under which this pipeline must be executed as. It has the same functionality as the command `iam.run.as`.                                                                                                      

### runWhen

This header is primarily to configure a pipeline which is auto-executed on import or install, but can be useful also in other cases. It defines a PE which evaluated on execution of the pipeline. If this expression returns `true`, the pipeline is executed. Otherwise, it is skipped and a info message is logged. Furthermore, a warning is returned to the caller that this pipeline was skipped. If the header is not set, the pipeline is always executed.<br/><br/>Here is an example to run the pipeline only when in test mode:  <br/>`runWhen: "#{@instance.profiles().contains('test')}"`<br/><br/>Or when a certain namespace is set:  <br/>`runWhen: "#{@instance.namespace() == 'enterprise'}"`                                                                  

### tracing

If this header is set to `false`, the pipeline and its commands are not trace logged on execution. The default is `true`.                                                                                                   


