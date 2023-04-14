<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_81a520b3a23fc6549cdf37d99bb38b03($e,$m){

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
