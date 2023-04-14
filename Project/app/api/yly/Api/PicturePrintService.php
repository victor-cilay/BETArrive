<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_2eace772c20f5436a5c0af79b49fa911($e,$m){

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
