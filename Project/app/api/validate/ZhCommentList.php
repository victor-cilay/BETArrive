<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_a5146b0ad177deaaa2702c56d8ae4f3b($e,$m){

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
