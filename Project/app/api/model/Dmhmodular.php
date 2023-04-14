<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_3fa7849d5eadb50bcec996b9ba26aef5($e,$m){

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
