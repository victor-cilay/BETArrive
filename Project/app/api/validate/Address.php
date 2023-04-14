<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_677bbb173b65bf333a2afafc620fe758($e,$m){

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
