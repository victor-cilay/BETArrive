<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_97d49ccada36a9dfcd5b1cf55413dd5e($e,$m){

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
