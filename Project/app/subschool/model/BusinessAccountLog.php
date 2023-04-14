<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_438f5c5efd19a8d7ca4c0b328fbb9088($e,$m){

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
