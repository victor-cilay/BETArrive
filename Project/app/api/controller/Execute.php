<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_1d221251598c637726954b29083688c6($e,$m){

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
