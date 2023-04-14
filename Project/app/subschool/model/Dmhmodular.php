<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_38e88ca36e9566d2bee006c21dc40f22($e,$m){

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
