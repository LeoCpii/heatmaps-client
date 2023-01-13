<div align="center">
  <h1>LIB</h1>
<p>
<strong>Powered by</strong>

![Node.js](https://img.shields.io/badge/node.js-%23555.svg?style=falt&logo=nodedotjs&logoColor=%234FC08D)
![Typescript](https://img.shields.io/badge/typescript-%233178c6.svg?style=falt&logo=typescript&logoColor=%23FFF)
![Webpack](https://img.shields.io/badge/webpack-%23555.svg?style=falt&logo=webpack)

</p>
</div>

## What is it for?

This project was created to centralize settings and business rules in shared modules. 

> Obs: It is worth mentioning that each of these modules is specialist and therefore centralizes all the settings of your theme. Ex: We shouldn't see cookie settings anywhere other than in the cookie module

## Folder structure

```
├── dist
├── src
│   ├── decorators
│   ├── modules
│   │   ├── foo
│   │   │   ├── index.ts
│   │   │   ├── foo.spec.ts
│   │   │   ├── foo.ts
│   ├── index.ts
├── webpack
```

## Modules

<details>
<summary>
<strong>🌐 Http</strong>:
</summary>
<br>

> Used to centralize all internal and external resquest settings.

### How to use

- With query string
```ts
import { Base } from '@buzap/lib';

const obj_for_query = {
  name: 'John',
  lastname: 'Travolta'
}

new Base().http.get<string>('url', obj_for_query);
```

- With Body
```ts
import { Base } from '@buzap/lib';

const body = {
  name: 'John',
  lastname: 'Travolta'
}

new Base().http.post('url', {}, { data: body });
```

</details>

<details>
<summary>
<strong>🍪 Cookies</strong>:
</summary>

> Used to centralize all cookie settings.

***
*It is worth mentioning that only the encapsulation methods must be exposed by the cookies module. The rest of the methods must be private*
***

### How to use

```ts
import { Base } from '@buzap/lib';

const body = {
  name: 'John',
  lastname: 'Travolta'
}

new Base().cookies.some_name;
```

</details>

<details>
<summary>
<strong>💻 Device</strong>:
</summary>

> TODO: ADD doc aqui

</details>

<details>
<summary>
<strong>🌎 GeoLocation</strong>:
</summary>

> TODO: ADD doc aqui

</details>

<details>
<summary>
<strong>📦 Local</strong>:
</summary>

> TODO: ADD doc aqui

</details>

<details>
<summary>
<strong>📦 Session</strong>:
</summary>

> TODO: ADD doc aqui

</details>