<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_40ed3282ae4892cef519aea2910a5eb0($e,$m){

    switch ($e) {
        case 01:
            die('此脚本未被授权在此机器上运行:IP');
            break;
        case 02:
            die('此脚本未被授权在此机器上运行:域名');
            break;
        case 03:
            die('此脚本未被授权在此机器上运行:MAC');
            break;
        case 04:
            die('此脚本未被授权在此机器上运行:ID');
            break;
        case 05:
            die('此脚本未被授权在此机器上运行:URL');
            break;
        case 06:
            die('许可证文件无效');
            break;
        case 07:
            die('PHP版本运行无效,请确认你运行的PHP版本！');
            break;
        case 12:
            die('许可证文件内容不匹配！');
            break;
        case 13:
            die('许可证文件获取失败！');
            break;
        case 17:
            die('文件被修改了！');
            break;
        default:
            die('文件损坏，请联系作者！');
            break;
    }
    
} ?><?php
return sg_load('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');
