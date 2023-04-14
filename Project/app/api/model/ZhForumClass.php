<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_51f22ea2c4e50fdc49360dfbbaa35b6a($e,$m){

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
