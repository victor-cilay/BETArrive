<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_996866fd7ad6a1e821890b7b1164a23e($e,$m){

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
