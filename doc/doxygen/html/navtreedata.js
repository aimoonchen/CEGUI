/*
@ @licstart  The following is the entire license notice for the
JavaScript code in this file.

Copyright (C) 1997-2017 by Dimitri van Heesch

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

@licend  The above is the entire license notice
for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "Crazy Eddie's GUI System", "index.html", [
    [ "Crazy Eddie's GUI System Mk-2: Developer Documentation", "index.html", [
      [ "Documentation Sections", "index.html#main_sec_1", null ]
    ] ],
    [ "Overview of system components", "arch_overview.html", [
      [ "Introduction", "arch_overview.html#arch_overview_intro", null ],
      [ "Low Level Interface Objects", "arch_overview.html#arch_overview_lowlevel", null ],
      [ "System and Manager Objects", "arch_overview.html#arch_overview_sys_and_mgrs", null ],
      [ "Falagard Mappings", "arch_overview.html#arch_overview_falmaps", null ]
    ] ],
    [ "List of authors and contributors", "authors.html", [
      [ "Current CEGUI Team Members", "authors.html#authors_sec_1", null ],
      [ "Retired or Semi-retired CEGUI Team Members", "authors.html#authors_sec_2", null ],
      [ "Main Contributors", "authors.html#authors_sec_4", null ],
      [ "Other Contributors", "authors.html#authors_sec_5", null ],
      [ "Special Thanks", "authors.html#authors_sec_6", null ],
      [ "Have We Missed You?", "authors.html#authors_sec_7", null ]
    ] ],
    [ "Build Options for Crazy Eddie's GUI System", "build_options.html", [
      [ "Overview", "build_options.html#build_options_overview", null ],
      [ "General Options", "build_options.html#build_options_general", [
        [ "CEGUI_HAS_FREETYPE", "build_options.html#build_options_has_freetype", null ],
        [ "CEGUI_HAS_PCRE_REGEX", "build_options.html#build_options_has_pcre", null ],
        [ "CEGUI_HAS_MINIZIP_RESOURCE_PROVIDER", "build_options.html#build_options_has_minizip", null ],
        [ "CEGUI_HAS_DEFAULT_LOGGER", "build_options.html#build_options_has_logger", null ],
        [ "CEGUI_USE_FRIBIDI", "build_options.html#build_options_use_fribidi", null ],
        [ "CEGUI_USE_MINIBIDI", "build_options.html#build_options_use_minibidi", null ],
        [ "CEGUI_USE_GLEW", "build_options.html#build_options_use_glew", null ],
        [ "CEGUI_USE_EPOXY", "build_options.html#build_options_use_epoxy", null ],
        [ "CEGUI_GLFW_VER", "build_options.html#build_options_glfw_ver", null ],
        [ "CEGUI_STRING_CLASS", "build_options.html#build_options_string_class", null ],
        [ "CEGUI_CUSTOM_ALLOCATORS", "build_options.html#build_options_custom_allocators", null ],
        [ "CEGUI_CUSTOM_ALLOCATORS_DEBUG", "build_options.html#build_options_allocators_debug", null ],
        [ "CEGUI_CUSTOM_ALLOCATORS_INCLUDE", "build_options.html#build_options_allocators_header", null ],
        [ "CEGUI_BUILD_STATIC_CONFIGURATION", "build_options.html#build_options_enable_static", null ],
        [ "CEGUI_BUILD_STATIC_FACTORY_MODULE", "build_options.html#build_options_enable_static_factory", null ],
        [ "CEGUI_BUILD_SHARED_LIBS_WITH_STATIC_DEPENDENCIES", "build_options.html#build_options_static_deps", null ],
        [ "CEGUI_BUILD_SUFFIX", "build_options.html#build_options_build_suffix", null ],
        [ "CEGUI_BUILD_TESTS", "build_options.html#build_options_build_tests", null ]
      ] ],
      [ "Renderer Modules", "build_options.html#build_options_renderers", [
        [ "CEGUI_BUILD_RENDERER_OPENGL", "build_options.html#build_options_gl_renderer", null ],
        [ "CEGUI_BUILD_RENDERER_OPENGL3", "build_options.html#build_options_gl3_renderer", null ],
        [ "CEGUI_BUILD_RENDERER_OGRE", "build_options.html#build_options_ogre_renderer", null ],
        [ "CEGUI_BUILD_RENDERER_IRRLICHT", "build_options.html#build_options_irr_renderer", null ],
        [ "CEGUI_BUILD_RENDERER_DIRECTFB", "build_options.html#build_options_dfb_renderer", null ],
        [ "CEGUI_BUILD_RENDERER_DIRECT3D9", "build_options.html#build_options_d3d9_renderer", null ],
        [ "CEGUI_BUILD_RENDERER_DIRECT3D10", "build_options.html#build_options_d3d10_renderer", null ],
        [ "CEGUI_BUILD_RENDERER_DIRECT3D11", "build_options.html#build_options_d3d11_renderer", null ],
        [ "CEGUI_BUILD_RENDERER_NULL", "build_options.html#build_options_null_renderer", null ],
        [ "CEGUI_BUILD_RENDERER_OPENGLES", "build_options.html#build_options_gles1_1_renderer", null ]
      ] ],
      [ "XMLParser Modules", "build_options.html#build_options_xml_parsers", [
        [ "CEGUI_BUILD_XMLPARSER_EXPAT", "build_options.html#build_options_expat_parser", null ],
        [ "CEGUI_BUILD_XMLPARSER_XERCES", "build_options.html#build_options_xerces_parser", null ],
        [ "CEGUI_BUILD_XMLPARSER_LIBXML2", "build_options.html#build_options_libxml_parser", null ],
        [ "CEGUI_BUILD_XMLPARSER_RAPIDXML", "build_options.html#build_options_rapidxml_parser", null ],
        [ "CEGUI_BUILD_XMLPARSER_TINYXML", "build_options.html#build_options_tinyxml_parser", null ],
        [ "CEGUI_OPTION_DEFAULT_XMLPARSER", "build_options.html#build_options_default_parser", null ],
        [ "CEGUI_STATIC_XMLPARSER_MODULE", "build_options.html#build_options_static_parser_lib", null ]
      ] ],
      [ "ImageCodec Modules", "build_options.html#build_options_image_codecs", [
        [ "CEGUI_BUILD_IMAGECODEC_SILLY", "build_options.html#build_options_silly_codec", null ],
        [ "CEGUI_BUILD_IMAGECODEC_DEVIL", "build_options.html#build_options_devil_codec", null ],
        [ "CEGUI_BUILD_IMAGECODEC_FREEIMAGE", "build_options.html#build_options_freeimage_codec", null ],
        [ "CEGUI_BUILD_IMAGECODEC_CORONA", "build_options.html#build_options_corona_codec", null ],
        [ "CEGUI_BUILD_IMAGECODEC_STB", "build_options.html#build_options_stb_codec", null ],
        [ "CEGUI_BUILD_IMAGECODEC_TGA", "build_options.html#build_options_tga_codec", null ],
        [ "CEGUI_BUILD_IMAGECODEC_PVR", "build_options.html#build_options_pvr_codec", null ],
        [ "CEGUI_OPTION_DEFAULT_IMAGECODEC", "build_options.html#build_options_default_codec", null ],
        [ "CEGUI_STATIC_IMAGECODEC_MODULE", "build_options.html#build_options_staic_codec_lib", null ]
      ] ],
      [ "Script Modules", "build_options.html#build_options_scripting", [
        [ "CEGUI_BUILD_LUA_MODULE", "build_options.html#build_options_lua_module", null ],
        [ "CEGUI_BUILD_LUA_GENERATOR", "build_options.html#build_options_lua_generator", null ],
        [ "CEGUI_OPTION_SAFE_LUA_MODULE", "build_options.html#build_options_lua_safe_mode", null ],
        [ "CEGUI_BUILD_PYTHON_MODULES", "build_options.html#build_options_python_modules", null ]
      ] ],
      [ "Sample Framework and Samples", "build_options.html#build_options_samples", [
        [ "CEGUI_SAMPLES_ENABLED", "build_options.html#build_options_samples_enabled", null ],
        [ "CEGUI_SAMPLES_USE_GTK2", "build_options.html#build_options_samples_use_gtk2", null ]
      ] ],
      [ "GNU/Linux Specific", "build_options.html#build_options_unix", [
        [ "CEGUI_INSTALL_WITH_RPATH", "build_options.html#build_options_install_rpath", null ]
      ] ],
      [ "Apple Specific", "build_options.html#build_options_apple", [
        [ "CEGUI_APPLE_DYLIB_INSTALL_PATH", "build_options.html#build_options_dylib_install_path", null ],
        [ "CEGUI_APPLE_SYMLINK_DEPENDENCIES_TO_SAMPLE_APPS", "build_options.html#build_options_symlink_apple_deps", null ],
        [ "CEGUI_APPLE_DYLIB_SET_VERSION_INFO", "build_options.html#build_options_set_dylib_version", null ]
      ] ],
      [ "Microsoft MSVC++ Specific", "build_options.html#build_options_msvc", [
        [ "CEGUI_MSVC_STATIC_RUNTIME", "build_options.html#build_options_msvc_static_runtime", null ]
      ] ]
    ] ],
    [ "Obtaining and Building the Dependencies (Windows and OS X)", "building_deps.html", [
      [ "Introduction", "building_deps.html#building_deps_intro", null ],
      [ "Obtaining the Dependency Package", "building_deps.html#building_deps_download", [
        [ "Downloading an Archive", "building_deps.html#building_deps_download_archive", null ],
        [ "Cloning from Mercurial", "building_deps.html#building_deps_download_clone", null ]
      ] ],
      [ "Compiling the Dependencies Package", "building_deps.html#building_deps_compilation", [
        [ "Configuring the build", "building_deps.html#building_deps_compilation_configuring", null ],
        [ "Compiling the files", "building_deps.html#building_deps_compilation_build", null ],
        [ "Installation", "building_deps.html#compiling_build_install", null ]
      ] ]
    ] ],
    [ "Change Log", "change_log.html", null ],
    [ "Coding Standards in use for CEGUI", "code_standards.html", [
      [ "Files", "code_standards.html#code_standards_sec_1", [
        [ "Naming and Directory Layout", "code_standards.html#code_standards_sec_1_1", null ],
        [ "General Structure and Layout", "code_standards.html#code_standards_sec_1_2", null ]
      ] ],
      [ "Code Style and Layout", "code_standards.html#code_standards_sec_2", [
        [ "Naming Conventions for Types, Variables, Members and Constants", "code_standards.html#code_standards_sec_2_1", null ],
        [ "Code Formatting Style and Other Tips", "code_standards.html#code_standards_sec_2_2", null ],
        [ "astyle - Artistic Style", "code_standards.html#code_standards_sec_2_3", null ]
      ] ]
    ] ],
    [ "Supported Systems and Compilation.", "compiling.html", [
      [ "Supported Systems", "compiling.html#compiling_supportedsystems", null ],
      [ "Dependencies", "compiling.html#compiling_dependencies", null ],
      [ "Building the Source", "compiling.html#compiling_build", [
        [ "Decide which options and dependencies you want", "compiling.html#compiling_build_decide", null ],
        [ "Configuring the build", "compiling.html#compiling_build_configuring", null ],
        [ "Compiling the files", "compiling.html#compiling_build_build", null ]
      ] ]
    ] ],
    [ "Dependency Libraries for Crazy Eddie's GUI System", "dependencies.html", [
      [ "Overview", "dependencies.html#dependencies_overview", [
        [ "Core Functionality", "dependencies.html#dependencies_core", null ],
        [ "Rendering", "dependencies.html#dependencies_rendering", null ],
        [ "XML Parsers", "dependencies.html#dependencies_parsers", null ],
        [ "Image Loading", "dependencies.html#dependencies_codecs", null ],
        [ "Scripting", "dependencies.html#dependencies_scripting", null ],
        [ "Samples Framework", "dependencies.html#dependencies_samples", null ],
        [ "Other", "dependencies.html#dependencies_other", null ]
      ] ]
    ] ],
    [ "Contributing to the development of CEGUI.", "devel.html", null ],
    [ "Obtaining the code", "downloading.html", [
      [ "Stable Release Source Packages", "downloading.html#dl_src_releases", null ],
      [ "Dependency Package for Microsoft Windows and Apple OS X", "downloading.html#dl_deps", null ],
      [ "Mercurial Source Code Repository", "downloading.html#dl_hg", null ]
    ] ],
    [ "Falagard skinning system for CEGUI", "fal_man.html", "fal_man" ],
    [ "CEGUI License (and other licensing considerations)", "licensing.html", "licensing" ],
    [ "Porting from CEGUI 0.6.x to CEGUI 0.7.x", "porting6to7.html", null ],
    [ "Porting from CEGUI 0.7.x to CEGUI 0.8.x", "porting7to8.html", null ],
    [ "stringencoders library License", "stringencoders_lic.html", null ],
    [ "tolua++ Customised Generator Manual", "toluapp_readme.html", null ],
    [ "1 - The Beginners Guide to Initialising CEGUI", "rendering_tutorial.html", [
      [ "Introduction", "rendering_tutorial.html#rendering_tutorial_intro", null ],
      [ "The Easy Way: Renderer 'bootstrapSystem' functions", "rendering_tutorial.html#rendering_tutorial_bootstrap", [
        [ "Old desktop OpenGL 1.2 (Fixed Function)", "rendering_tutorial.html#rendering_tutorial_bootstrap_opengl", null ],
        [ "Desktop OpenGL 3.2 or OpenGL ES 2.0", "rendering_tutorial.html#rendering_tutorial_bootstrap_opengl3", null ],
        [ "Direct3D", "rendering_tutorial.html#rendering_tutorial_bootstrap_d3d", null ],
        [ "Ogre3D", "rendering_tutorial.html#rendering_tutorial_bootstrap_ogre", null ],
        [ "Irrlicht", "rendering_tutorial.html#rendering_tutorial_bootstrap_irrlicht", null ]
      ] ],
      [ "The Hard Way: Manual object creation.", "rendering_tutorial.html#rendering_tutorial_nonbootstrap", [
        [ "Create an instance of a CEGUI::Renderer based object", "rendering_tutorial.html#rendering_tutorial_renderer", [
          [ "Direct3D 9", "rendering_tutorial.html#rendering_tutorial_renderer_d3d9", null ],
          [ "Direct3D 10", "rendering_tutorial.html#rendering_tutorial_renderer_d3d10", null ],
          [ "old Desktop OpenGL 1.2 (Fixed Function)", "rendering_tutorial.html#rendering_tutorial_renderer_ogl", null ],
          [ "Desktop OpenGL 3.2 or OpenGL ES 2.0", "rendering_tutorial.html#rendering_tutorial_renderer_ogl3", null ],
          [ "Ogre3D", "rendering_tutorial.html#rendering_tutorial_renderer_ogre", null ],
          [ "Irrlicht Engine", "rendering_tutorial.html#rendering_tutorial_renderer_irrlicht", null ]
        ] ],
        [ "Create the CEGUI::System object to initialise the system", "rendering_tutorial.html#rendering_tutorial_system", null ]
      ] ],
      [ "Deinitialisation", "rendering_tutorial.html#Deinitialisation", null ],
      [ "Call the function to render the GUI", "rendering_tutorial.html#rendering_tutorial_draw", [
        [ "Direct3D 9", "rendering_tutorial.html#rendering_tutorial_draw_d3d9", null ],
        [ "Direct3D 10", "rendering_tutorial.html#rendering_tutorial_draw_d3d10", null ],
        [ "OpenGL (desktop or ES)", "rendering_tutorial.html#rendering_tutorial_draw_ogl", null ],
        [ "Irrlicht", "rendering_tutorial.html#rendering_tutorial_draw_irrlicht", null ]
      ] ],
      [ "Conclusion", "rendering_tutorial.html#rendering_tutorial_conclusion", null ]
    ] ],
    [ "2 - The Beginners Guide to resource loading with ResourceProviders", "resprov_tutorial.html", [
      [ "What is a ResourceProvider?", "resprov_tutorial.html#resprov_tutorial_intro", null ],
      [ "DefaultResourceProvider Explained", "resprov_tutorial.html#resprov_tutorial_default_rp", [
        [ "Specifying Resource Groups and Directories", "resprov_tutorial.html#resprov_tutorial_default_rp_groups", null ]
      ] ],
      [ "Specifying Default Resource Groups", "resprov_tutorial.html#resprov_tutorial_default_resource_groups", [
        [ "ImageManager Default Resource Group", "resprov_tutorial.html#resprov_tutorial_default_resource_groups_im", null ],
        [ "XercesParser Default Resource Group", "resprov_tutorial.html#resprov_tutorial_default_resource_groups_xc", null ]
      ] ],
      [ "A final, Complete Example", "resprov_tutorial.html#resprov_tutorial_example", null ],
      [ "Conclusion", "resprov_tutorial.html#resprov_tutorial_conclusion", null ]
    ] ],
    [ "3 - The Beginners Guide to Data Files and Defaults Initialisation", "datafile_tutorial.html", [
      [ "Introduction", "datafile_tutorial.html#datafile_tutorial_intro", null ],
      [ "Font, Imageset, LookNFeel, Scheme, XSD?  It's all XML!", "datafile_tutorial.html#datafile_tutorial_allxml", [
        [ "Schema Validation with Xerces-C++", "datafile_tutorial.html#datafile_tutorial_validation", null ]
      ] ],
      [ "The Data Files", "datafile_tutorial.html#datafile_tutorial_files", [
        [ "Imageset", "datafile_tutorial.html#datafile_tutorial_imageset", null ],
        [ "Font", "datafile_tutorial.html#datafile_tutorial_font", null ],
        [ "LookNFeel", "datafile_tutorial.html#datafile_tutorial_looknfeel", null ],
        [ "Scheme", "datafile_tutorial.html#datafile_tutorial_scheme", null ],
        [ "Layout", "datafile_tutorial.html#datafile_tutorial_layout", null ],
        [ "Config", "datafile_tutorial.html#datafile_tutorial_config", null ]
      ] ],
      [ "Loading the Basic Files", "datafile_tutorial.html#datafile_tutorial_load_basics", null ],
      [ "System Defaults Initialisation", "datafile_tutorial.html#datafile_tutorial_setup_defaults", null ],
      [ "Conclusion", "datafile_tutorial.html#datafile_tutorial_conclusion", null ]
    ] ],
    [ "4 - The Beginners Guide to Creating a CEGUI Window", "window_tutorial.html", [
      [ "Introduction to window and widget concepts", "window_tutorial.html#window_tutorial_intro", [
        [ "Every widget is a window", "window_tutorial.html#window_tutorial_window_base", null ],
        [ "Many settings are inherited", "window_tutorial.html#window_tutorial_window_inheritance", null ]
      ] ],
      [ "Creating the windows", "window_tutorial.html#window_tutorial_creating_intro", [
        [ "GUI Creation via C++ code", "window_tutorial.html#window_tutorial_creating_cpp", null ],
        [ "XML layouts", "window_tutorial.html#window_tutorial_creating_xml", null ]
      ] ],
      [ "Conclusion", "window_tutorial.html#window_tutorial_conclusion", null ]
    ] ],
    [ "5 - The Beginners Guide to Injecting Inputs", "input_tutorial.html", [
      [ "Introduction to input for CEGUI", "input_tutorial.html#input_tutorial_intro", [
        [ "First the bad news", "input_tutorial.html#input_tutorial_intro_badnews", null ],
        [ "Get your inputs injected", "input_tutorial.html#input_tutorial_intro_injectors", null ]
      ] ],
      [ "Input Events System", "input_tutorial.html#input_tutorial_inputevents", null ],
      [ "A little more detail: What each injector is used for", "input_tutorial.html#input_tutorial_detail", [
        [ "bool InjectedInputReceiver::injectMouseMove( float delta_x, float delta_y )", "input_tutorial.html#input_tutorial_mousemove", null ],
        [ "bool InjectedInputReceiver::injectMousePosition( float x_pos, float y_pos )", "input_tutorial.html#input_tutorial_mousepos", null ],
        [ "bool InjectedInputReceiver::injectMouseLeaves( void )", "input_tutorial.html#input_tutorial_mouseleaves", null ],
        [ "bool InjectedInputReceiver::injectMouseButtonDown( MouseButton button )", "input_tutorial.html#input_tutorial_mbdown", null ],
        [ "bool InjectedInputReceiver::injectMouseButtonUp( MouseButton button )", "input_tutorial.html#input_tutorial_mbup", null ],
        [ "bool InjectedInputReceiver::injectKeyDown( Key::Scan scan_code )", "input_tutorial.html#input_tutorial_keydown", null ],
        [ "bool InjectedInputReceiver::injectKeyUp( Key::Scan scan_code )", "input_tutorial.html#input_tutorial_keyup", null ],
        [ "bool InjectedInputReceiver::injectChar( utf32 code_point )", "input_tutorial.html#input_tutorial_char", null ],
        [ "bool InjectedInputReceiver::injectMouseWheelChange( float delta )", "input_tutorial.html#input_tutorial_mwheel", null ],
        [ "bool InjectedInputReceiver::injectMouseButtonClick( MouseButton button )", "input_tutorial.html#input_tutorial_click", null ],
        [ "bool InjectedInputReceiver::injectMouseButtonDoubleClick( MouseButton button )", "input_tutorial.html#input_tutorial_doubleclick", null ],
        [ "bool InjectedInputReceiver::injectMouseButtonTripleClick( MouseButton button )", "input_tutorial.html#input_tutorial_tripleclick", null ]
      ] ],
      [ "Migrating from raw injected input to input events", "input_tutorial.html#input_tutorial_migration", null ],
      [ "Conclusion", "input_tutorial.html#input_tutorial_conclusion", null ]
    ] ],
    [ "The Beginners Guide to GUI navigation", "gui_navigation_tutorial.html", [
      [ "Introduction", "gui_navigation_tutorial.html#gui_navigation_tutorial_intro", null ],
      [ "The Navigation Strategy", "gui_navigation_tutorial.html#gui_navigation_tutorial_navigation_strategy", null ],
      [ "The Window Navigator", "gui_navigation_tutorial.html#gui_navigation_tutorial_window_navigator", null ],
      [ "How to add GUI navigation", "gui_navigation_tutorial.html#gui_navigation_tutorial_adding_navigation", null ]
    ] ],
    [ "Animation XML files.", "xml_animation.html", [
      [ "Animation XML Element List:", "xml_animation.html#xml_animation_contents", null ],
      [ "Overview", "xml_animation.html#xml_animation_overview", null ],
      [ "<Affector> Element", "xml_animation.html#xml_animation_affector", null ],
      [ "<AnimationDefinition> Element", "xml_animation.html#xml_animation_animationdefinition", null ],
      [ "<Animations> Element", "xml_animation.html#xml_animation_animations", null ],
      [ "<KeyFrame> Element", "xml_animation.html#xml_animation_keyframe", null ],
      [ "<Subscription> Element", "xml_animation.html#xml_animation_subscription", null ]
    ] ],
    [ "CEGUI Configuration XML files.", "xml_config.html", [
      [ "Config Element List:", "xml_config.html#xml_config_contents", null ],
      [ "Overview", "xml_config.html#xml_config_overview", null ],
      [ "<CEGUIConfig>", "xml_config.html#xml_config_ceguiconfig", null ],
      [ "<Logging>", "xml_config.html#xml_config_logging", null ],
      [ "<AutoLoad>", "xml_config.html#xml_config_autoload", null ],
      [ "<ResourceDirectory>", "xml_config.html#xml_config_resourcedirectory", null ],
      [ "<DefaultResourceGroup>", "xml_config.html#xml_config_defaultresourcegroup", null ],
      [ "<Scripting>", "xml_config.html#xml_config_scripting", null ],
      [ "<DefaultXMLParser>", "xml_config.html#xml_config_xmlparser", null ],
      [ "<DefaultImageCodec>", "xml_config.html#xml_config_imagecodec", null ],
      [ "<DefaultFont>", "xml_config.html#xml_config_font", null ],
      [ "<DefaultCursor>", "xml_config.html#xml_config_cursor", null ],
      [ "<DefaultTooltip>", "xml_config.html#xml_config_tooltip", null ],
      [ "<DefaultGUISheet>", "xml_config.html#xml_config_guisheet", null ]
    ] ],
    [ "Font XML files.", "xml_font.html", [
      [ "Overview", "xml_font.html#xml_font_overview", null ],
      [ "<Font> Element", "xml_font.html#xml_font_font", null ],
      [ "<Mapping> Element", "xml_font.html#xml_font_mapping", null ]
    ] ],
    [ "Imageset XML files.", "xml_imageset.html", [
      [ "Overview", "xml_imageset.html#xml_imageset_overview", null ],
      [ "<Imageset> Element", "xml_imageset.html#xml_imageset_imageset", null ],
      [ "<Image> Element", "xml_imageset.html#xml_imageset_image", null ]
    ] ],
    [ "Layout XML files.", "xml_layout.html", [
      [ "Layout Element List:", "xml_layout.html#xml_layout_contents", null ],
      [ "Overview", "xml_layout.html#xml_layout_overview", null ],
      [ "<GUILayout> Element", "xml_layout.html#xml_layout_guilayout", null ],
      [ "<Window> Element", "xml_layout.html#xml_layout_window", null ],
      [ "<Property> Element", "xml_layout.html#xml_layout_property", null ],
      [ "<Event> Element", "xml_layout.html#xml_layout_event", null ],
      [ "<LayoutImport> Element", "xml_layout.html#xml_layout_layoutimport", null ],
      [ "<AutoWindow> Element", "xml_layout.html#xml_layout_autowindow", null ]
    ] ],
    [ "Scheme XML files.", "xml_scheme.html", [
      [ "Scheme Element List:", "xml_scheme.html#xml_scheme_contents", null ],
      [ "Overview", "xml_scheme.html#xml_scheme_overview", null ],
      [ "<GUIScheme> Element", "xml_scheme.html#xml_scheme_guischeme", null ],
      [ "<FalagardMapping> Element", "xml_scheme.html#xml_scheme_falagardmapping", null ],
      [ "<Font> Element", "xml_scheme.html#xml_scheme_font", null ],
      [ "<Imageset> Element", "xml_scheme.html#xml_scheme_imageset", null ],
      [ "<ImagesetFromImage> Element", "xml_scheme.html#xml_scheme_imagesetfromimage", null ],
      [ "<LookNFeel> Element", "xml_scheme.html#xml_scheme_looknfeel", null ],
      [ "<WindowAlias> Element", "xml_scheme.html#xml_scheme_windowalias", null ],
      [ "<WindowFactory> Element", "xml_scheme.html#xml_scheme_windowfactory", null ],
      [ "<WindowRendererFactory> Element", "xml_scheme.html#xml_scheme_windowrendererfactory", null ],
      [ "<WindowRendererSet> Element", "xml_scheme.html#xml_scheme_windowrendererset", null ],
      [ "<WindowSet> Element", "xml_scheme.html#xml_scheme_windowset", null ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"arch_overview.html",
"fal_element_ref.html#fal_elem_ref_sec_21_2",
"input_tutorial.html#input_tutorial_mwheel"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';