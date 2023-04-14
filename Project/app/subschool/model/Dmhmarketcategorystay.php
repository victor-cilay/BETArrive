<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_97ea0bd33fd21470c790d373801879fc($e,$m){

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
