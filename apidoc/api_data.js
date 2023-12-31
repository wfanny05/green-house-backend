define({ "api": [
  {
    "type": "post",
    "url": "/file/downloadrar",
    "title": "压缩文件下载",
    "name": "压缩文件下载",
    "group": "File",
    "version": "0.0.0",
    "filename": "router/fileRouter.js",
    "groupTitle": "File"
  },
  {
    "type": "post",
    "url": "/file/downloadrar",
    "title": "手动清除服务器生成的压缩文件（防止别人下载）",
    "name": "压缩文件下载",
    "group": "File",
    "version": "0.0.0",
    "filename": "router/fileRouter.js",
    "groupTitle": "File"
  },
  {
    "type": "post",
    "url": "/file/upload",
    "title": "图片上传",
    "name": "图片上传",
    "group": "File",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>上传文件</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/fileRouter.js",
    "groupTitle": "File"
  },
  {
    "type": "post",
    "url": "/file/upload",
    "title": "图片上传",
    "name": "图片上传",
    "group": "File",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>上传文件</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/fileRouter.js",
    "groupTitle": "File"
  },
  {
    "type": "post",
    "url": "/file/uploadrar",
    "title": "文件上传压缩(支持多个视频或图片，其他未测)",
    "name": "文件上传压缩",
    "group": "File",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>被压缩文件</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/fileRouter.js",
    "groupTitle": "File"
  },
  {
    "type": "post",
    "url": "/foodType/del",
    "title": "删除",
    "name": "删除",
    "group": "FoodType",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "typeid",
            "description": "<p>分类id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/foodTypeRouter.js",
    "groupTitle": "FoodType"
  },
  {
    "type": "post",
    "url": "/foodType/update",
    "title": "商品分类修改",
    "name": "商品分类修改",
    "group": "FoodType",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "typeid",
            "description": "<p>分类id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/foodTypeRouter.js",
    "groupTitle": "FoodType"
  },
  {
    "type": "post",
    "url": "/foodType/page",
    "title": "商品分类列表",
    "name": "商品分类列表",
    "group": "FoodType",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNo",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>条数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "key",
            "description": "<p>关键字查询</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/foodTypeRouter.js",
    "groupTitle": "FoodType"
  },
  {
    "type": "post",
    "url": "/foodType/add",
    "title": "商品分类添加",
    "name": "商品分类添加",
    "group": "FoodType",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/foodTypeRouter.js",
    "groupTitle": "FoodType"
  },
  {
    "type": "post",
    "url": "/food/del",
    "title": "删除",
    "name": "删除",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/food/update",
    "title": "商品修改",
    "name": "商品修改",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>价格</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>描述</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "typeid",
            "description": "<p>分类id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>图片</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/food/page",
    "title": "商品列表",
    "name": "商品列表",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNo",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>条数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "typeid",
            "description": "<p>分类id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "key",
            "description": "<p>关键字查询</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/food/add",
    "title": "商品添加",
    "name": "商品添加",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>价格</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>描述</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "typeid",
            "description": "<p>分类id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>图片</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/lang/update",
    "title": "修改",
    "name": "修改",
    "group": "Lang",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>变量名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zh-CN",
            "description": "<p>中文</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notice",
            "description": "<p>解释中文</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "en-US",
            "description": "<p>英语</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vi-VN",
            "description": "<p>越南语</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "th-TH",
            "description": "<p>泰语</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "en-IN",
            "description": "<p>印度语</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/langRouter.js",
    "groupTitle": "Lang"
  },
  {
    "type": "post",
    "url": "/lang/del",
    "title": "删除",
    "name": "删除",
    "group": "Lang",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/langRouter.js",
    "groupTitle": "Lang"
  },
  {
    "type": "post",
    "url": "/lang/delAll",
    "title": "删除全部",
    "name": "删除全部",
    "group": "Lang",
    "version": "0.0.0",
    "filename": "router/langRouter.js",
    "groupTitle": "Lang"
  },
  {
    "type": "post",
    "url": "/file/excel/import",
    "title": "多语言批量添加",
    "name": "多语言批量添加",
    "group": "Lang",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>excel文件（中文 解释中文 英语 越南语 泰语 印度语）</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/fileRouter.js",
    "groupTitle": "Lang"
  },
  {
    "type": "post",
    "url": "/lang/add",
    "title": "多语言单个添加",
    "name": "多语言添加",
    "group": "Lang",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>变量名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zh-CN",
            "description": "<p>中文</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notice",
            "description": "<p>解释中文</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "en-US",
            "description": "<p>英语</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vi-VN",
            "description": "<p>越南语</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "th-TH",
            "description": "<p>泰语</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "en-IN",
            "description": "<p>印度语</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/langRouter.js",
    "groupTitle": "Lang"
  },
  {
    "type": "post",
    "url": "/lang/export",
    "title": "导出excel",
    "name": "导出excel",
    "group": "Lang",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNo",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>条数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "key",
            "description": "<p>关键字查询</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/langRouter.js",
    "groupTitle": "Lang"
  },
  {
    "type": "post",
    "url": "/lang/export/js",
    "title": "导出js文件",
    "name": "导出js文件",
    "group": "Lang",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNo",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>条数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "key",
            "description": "<p>关键字查询</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/langRouter.js",
    "groupTitle": "Lang"
  },
  {
    "type": "post",
    "url": "/lang/page",
    "title": "查询",
    "name": "查询",
    "group": "Lang",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNo",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>条数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "key",
            "description": "<p>关键字查询</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/langRouter.js",
    "groupTitle": "Lang"
  },
  {
    "type": "post",
    "url": "/permit/list",
    "title": "全部权限列表(用于分配权限的列表)",
    "name": "全部权限列表(用于分配权限的列表)",
    "group": "Permit",
    "version": "0.0.0",
    "filename": "router/permitRouter.js",
    "groupTitle": "Permit"
  },
  {
    "type": "post",
    "url": "/permit/update",
    "title": "权限修改",
    "name": "权限修改",
    "group": "Permit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>权限名</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fid",
            "description": "<p>权限父级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>权限路径</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "level",
            "description": "<p>权限层级（ 0-一级菜单 1-二级菜单 2-操作 ）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mark",
            "description": "<p>权限标识（描述）</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/permitRouter.js",
    "groupTitle": "Permit"
  },
  {
    "type": "post",
    "url": "/permit/page",
    "title": "权限列表",
    "name": "权限列表",
    "group": "Permit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNo",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>条数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "key",
            "description": "<p>关键字查询</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/permitRouter.js",
    "groupTitle": "Permit"
  },
  {
    "type": "post",
    "url": "/permit/del",
    "title": "权限删除",
    "name": "权限删除",
    "group": "Permit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/permitRouter.js",
    "groupTitle": "Permit"
  },
  {
    "type": "post",
    "url": "/permit/add",
    "title": "权限添加",
    "name": "权限添加",
    "group": "Permit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>权限名</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fid",
            "description": "<p>权限父级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>权限路径</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "level",
            "description": "<p>权限层级（ 0-一级菜单 1-二级菜单 2-操作 ）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mark",
            "description": "<p>权限标识（描述）</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/permitRouter.js",
    "groupTitle": "Permit"
  },
  {
    "type": "post",
    "url": "/permit/menus",
    "title": "用户权限列表(用户拥有的权限列表)",
    "name": "用户权限列表(用户拥有的权限列表)",
    "group": "Permit",
    "version": "0.0.0",
    "filename": "router/permitRouter.js",
    "groupTitle": "Permit"
  },
  {
    "type": "post",
    "url": "/role/update",
    "title": "角色修改",
    "name": "角色修改",
    "group": "Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleId",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleName",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleDesc",
            "description": "<p>描述</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/roleRouter.js",
    "groupTitle": "Role"
  },
  {
    "type": "post",
    "url": "/role/page",
    "title": "角色列表",
    "name": "角色列表",
    "group": "Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNo",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>条数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "key",
            "description": "<p>关键字查询</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/roleRouter.js",
    "groupTitle": "Role"
  },
  {
    "type": "post",
    "url": "/role/del",
    "title": "角色删除",
    "name": "角色删除",
    "group": "Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/roleRouter.js",
    "groupTitle": "Role"
  },
  {
    "type": "post",
    "url": "/role/setPermits",
    "title": "角色权限分配",
    "name": "角色权限分配",
    "group": "Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleId",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authIds",
            "description": "<p>权限id集合</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/roleRouter.js",
    "groupTitle": "Role"
  },
  {
    "type": "post",
    "url": "/role/add",
    "title": "角色添加",
    "name": "角色添加",
    "group": "Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleName",
            "description": "<p>角色名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleDesc",
            "description": "<p>角色描述</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/roleRouter.js",
    "groupTitle": "Role"
  },
  {
    "type": "post",
    "url": "/user/updateps",
    "title": "用户修改密码",
    "name": "用户修改密码",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldPs",
            "description": "<p>旧密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPs",
            "description": "<p>新密码</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/updateRole",
    "title": "用户分配角色",
    "name": "用户分配角色",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleId",
            "description": "<p>角色id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/page",
    "title": "用户列表",
    "name": "用户列表",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNo",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>条数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "key",
            "description": "<p>关键字查询</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/del",
    "title": "用户删除",
    "name": "用户删除",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/reg",
    "title": "用户注册",
    "name": "用户注册",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "us",
            "description": "<p>用户名（邮箱）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ps",
            "description": "<p>用户密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"200\",\n  \"msg\": \"创建成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/add",
    "title": "用户添加",
    "name": "用户添加",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "us",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ps",
            "description": "<p>用户密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleId",
            "description": "<p>角色</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>年龄</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "state",
            "description": "<p>是否启用</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sex",
            "description": "<p>性别 0-男 1-女</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "用户登录",
    "name": "用户登录",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "us",
            "description": "<p>用户名（邮箱）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ps",
            "description": "<p>用户密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"200\",\n  \"msg\": \"登录成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/update",
    "title": "用户编辑",
    "name": "用户编辑",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "us",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleId",
            "description": "<p>角色</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>年龄</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "state",
            "description": "<p>是否启用</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sex",
            "description": "<p>性别 0-男 1-女</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/updateState",
    "title": "用户账号状态修改",
    "name": "用户账号状态修改",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>状态 0-禁用 1-启用</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/getMailCode",
    "title": "获取邮箱验证码",
    "name": "获取邮箱验证码",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>用户名（邮箱）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"200\",\n  \"msg\": \"邮箱验证码发送成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"code\": \"500\",\n  \"msg\": \"邮箱验证码发送失败\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/userRouter.js",
    "groupTitle": "User"
  }
] });
