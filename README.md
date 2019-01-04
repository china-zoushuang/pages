# pages

## Project upload
```
git subtree push --prefix dist origin gh-pages
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 规范规则

## 一、文件命名

1. 以下划线连接；（例如：animate_routes.js）

## 二、css

1. [BEM 规则](http://hao.jobbole.com/css-naming-bem/?utm_source=hao.jobbole.com&utm_medium=relatedResources)
``` html
<!-- 例子 -->
<header class="header">
    <img class="logo">
    <form class="search_form">
        <input type="search_form__input">
        <button type="search_form__button btn--primary">确认</button>
        <button type="search_form__button btn--default">取消</button>
    </form>
    <ul class="lang_switcher">
        <li class="lang_switcher__item">
            <a class="lang_switche-item__link" href="url">en</a>
        </li>
        <li class="lang_switcher__item">
            <a class="lang_switcher-item__link" href="url">ru</a>
        </li>
    </ul>
</header>
```

# 注意
1. 注释了 lib-flexible 中的 300ms 的 timeout，使页面变化更加顺畅