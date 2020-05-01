# Actions

**Actions** are object representations of events that occur in an application. 

We need a way to describe state changes in our application. We'll use actions for this. `Actions` are **payloads** of information that send an instruction on what type of transformation to make to your application’s state as well as any other relevant information. That's basically a fancy way of saying "an action is an object which describes what sort of transformation you want to make to your state.". An object makes up a perfect data structure for an action since it can perfectly describe the type of event which occurred in your application. Let's check out what an average action might looks like

```javascript
const action = {
  type: 'LIKE_TWEET',
  id: 950788310443724800,
  uid: 'amenra'
}
```
As mentioned above it's just an object which describes some **action (or event)** which is happening in your app.

One thing to note is that actions must have a **type** property to specify, well, the `type` of action which is occurring. Other than **type**, the structure of the action is up to you.
