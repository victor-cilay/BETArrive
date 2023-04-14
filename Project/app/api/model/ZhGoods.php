<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_6b8f85a364cec704444e918c2827b826($e,$m){

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
