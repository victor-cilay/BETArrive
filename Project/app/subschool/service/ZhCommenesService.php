<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_4604fd4d020dce329e12cd4da86f1711($e,$m){

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