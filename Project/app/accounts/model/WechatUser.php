<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_5fb5db001c24cc1f4b11708671d72619($e,$m){

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
