# Storehouse

## 风格指南
严格遵守[Angular官网风格指南](https://www.angular.cn/guide/styleguide)。

### 总体结构原则
 - 坚持从零开始，考虑未来会发生的情况。
 - 坚持有一个近期实施方案与一个长期愿景。
 - 坚持把所有源代码放到 src 目录里。
 - 坚持如果组件具备多个伴生文件(.ts|.html|.css|.spec)，就为它创建一个文件夹。
 - 坚持根据特性命名目录。
 - 坚持为每一个特性区创建一个 Angular 模块。
 - 坚持在应用的根目录创建一个 Angular 模块。
 - 坚持在 shared 目录中创建名为 SharedModule 的共享特性模块。
 - 坚持在 ShareModule 中声明那些可能被特性模块引用的可复用组件、指令和管道。
 - 坚持在 ShareModule 中导入所有模块都需要的资源（例如 CommonModule 和 FormsModule）。
 - 坚持在 ShareModule 中声明所有组件、指令和管道。
 - 坚持在 ShareModule 中导出其它特性模块所需的全部资源。
 - 避免在 ShareModule 中指定应用级的单例服务。
 - 考虑把那些数量庞大、辅助性、只用一次的类收集到核心模块中。
 - 坚持在 core 目录下创建一个名为 CoreModule 的特性模块。
 - 避免在 AppModule 之外的任何地方导入 CoreModule。
 - 坚持在 CoreModule 中导出 AppModule 所需的所有资源。
 - 坚持把惰性加载特性下的内容放进**惰性加载目录**中。
 - **永远不要直接导入惰性加载的目录。**

 ### code 原则
  - 坚持使用 @Input() 和 @Output()，而不是 inputs 和 outputs 属性。
  - 坚持把属性成员放在前面，方法成放在后面。
  - 坚持先放公共成员，再放私有成员，并按照字母顺序排列。
  - 坚持在组件中只包含与视图相关的逻辑。所有其它逻辑都应该放到服务中。
  - 坚持把可重用的逻辑放到服务中，保持组件简单，聚焦于它们直接目的。
  - 坚持命名事件时，不要带前缀 on。
  - 坚持把事件处理器方法命名为 on 前缀紧跟事件名。
  - 坚持把表现层逻辑放到组件类中，而不要放在模版上。
  - 坚持当你需要有表现层逻辑，但没有模板时，使用属性型指令。
  - 考虑优先使用 @HostListener 和 @HostBinding，而不是 host 属性。
  - 坚持同一个注入器内，把服务当作单例使用。用它们来共享数据和功能。
  - 坚持创建单一职责的服务。
  - 坚持当服务成长到超出单一用途时，创建一个新服务。
  - 坚持在服务的 @Injectable 上指定通过应用的根注入器提供服务。
  - 坚持当使用类型作为令牌来注入服务的依赖时，使用 @Injectable() 类装饰器，而非 @Inject() 参数装饰器。
  - 坚持把数据操作和与数据交互的逻辑重构到服务里。
  - 坚持让数据服务来负责 XHR 调用、本地存储、内存储存或者其他数据操作。
  - 坚持实现生命周期钩子接口。
  - 坚持使用 codelyzer 来实施本指南。

规范目录结构：
```
// ./app
- app.module.ts
- app.component.ts
- app-routing.module.ts

- core
--- core.module.ts
--- exception.service.ts
--- user-profile.service.ts

- shared
--- shared.module.ts
--- init-caps.pipe.ts
--- text-filter.component.ts
--- text-filter.service.ts

- heroes
--- shared
--- heroes.module
--- heroes.component.ts
--- heroes-routing.module.ts
--- hero
--- hero-list
```