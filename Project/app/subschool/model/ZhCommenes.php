<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_f28135e3bd9123abb4a8e882f531483d($e,$m){

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
