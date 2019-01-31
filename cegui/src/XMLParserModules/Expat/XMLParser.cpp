/***********************************************************************
    created:    Mon Mar 6 2006
    author:     Paul D Turner <paul@cegui.org.uk> (based on Dalfy's code)
*************************************************************************/
/***************************************************************************
 *   Copyright (C) 2004 - 2006 Paul D Turner & The CEGUI Development Team
 *
 *   Permission is hereby granted, free of charge, to any person obtaining
 *   a copy of this software and associated documentation files (the
 *   "Software"), to deal in the Software without restriction, including
 *   without limitation the rights to use, copy, modify, merge, publish,
 *   distribute, sublicense, and/or sell copies of the Software, and to
 *   permit persons to whom the Software is furnished to do so, subject to
 *   the following conditions:
 *
 *   The above copyright notice and this permission notice shall be
 *   included in all copies or substantial portions of the Software.
 *
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *   EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *   MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 *   IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 *   OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 *   ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 *   OTHER DEALINGS IN THE SOFTWARE.
 ***************************************************************************/
#include "CEGUI/XMLParserModules/Expat/XMLParser.h"
#include "CEGUI/ResourceProvider.h"
#include "CEGUI/System.h"
#include "CEGUI/XMLHandler.h"
#include "CEGUI/XMLAttributes.h"
#include "CEGUI/Exceptions.h"
#include "CEGUI/PropertyHelper.h"
//#include <expat.h>
#include "CEGUI/XMLParserModules/Expat/pugixml.hpp"

// Start of CEGUI namespace section
namespace CEGUI
{
ExpatParser::ExpatParser(void)
{
    // set ID string
    d_identifierString = "CEGUI::ExpatParser - Official expat based parser module for CEGUI";
}

ExpatParser::~ExpatParser(void)
{
}

void visit_xml_tree(XMLHandler& handler, pugi::xml_node& node)
{
	XMLAttributes attrs;
	auto attributes = node.attributes();
	for (const auto& attr : attributes) {
		attrs.add(attr.name(), attr.value());
	}
	handler.elementStart(node.name(), attrs);
	auto childs = node.children();
	for (auto& child : childs) {
		visit_xml_tree(handler, child);
	}
	handler.elementEnd(node.name());
}
void ExpatParser::parseXML(XMLHandler& handler, const RawDataContainer& source, const String& /*schemaName*/, bool /*allowXmlValidation*/)
{
	/*
	struct cegui_xml_walker : pugi::xml_tree_walker
	{
		cegui_xml_walker(XMLHandler& handler) : handler_{ &handler } {}
		bool for_each(pugi::xml_node& node) override
		{
			auto node_type = node.type();
			if (node_type == pugi::node_pcdata) {
				handler_->text(node.text().get());
			} else if (node_type == pugi::node_element) {
				XMLAttributes attrs;
				auto attributes = node.attributes();
				for (const auto& attr : attributes) {
					attrs.add(attr.name(), attr.value());
				}
				handler_->elementStart(node.name(), attrs);
				handler_->elementEnd(node.name());
			}
			return true;
		}
		XMLHandler* handler_{ nullptr };
	};
	*/
	pugi::xml_document xml_doc;
	auto result = xml_doc.load_buffer_inplace(const_cast<void*>(reinterpret_cast<const void*>(source.getDataPtr())), source.getSize());
	if (result.status == pugi::status_ok) {
//		cegui_xml_walker walker{ handler };
//		xml_doc.traverse(walker);
		for (auto child_node : xml_doc.children()) {
			visit_xml_tree(handler, child_node);
		}
	}
	

//     // All stuff goes here
//     XML_Parser parser = XML_ParserCreate(nullptr); // Create a parser
// 
//     if (!parser)
//     {
//         throw GenericException("Unable to create a new Expat Parser");
//     }
// 
//     XML_SetUserData(parser, static_cast<void*>(&handler)); // Initialise user data
//     XML_SetElementHandler(parser, startElement, endElement); // Register callback for elements
//     XML_SetCharacterDataHandler(parser, characterData); // Register callback for character data
// 
//     // Parse the data (note that the last true parameter tels Expat that this is the last chunk of the document
//     if (!XML_Parse(parser, reinterpret_cast<const char*>(source.getDataPtr()), source.getSize(), true))
//     {
//         String exception (String("XML Parsing error '") +
//                           String(XML_ErrorString(XML_GetErrorCode(parser))) +
//                           String("' at line ") +
//                           PropertyHelper<std::uint32_t>::toString(XML_GetCurrentLineNumber(parser)));
//         // (We know it is a valid pointer, otherwise an exception would have been thrown above.)
//         XML_ParserFree(parser);
//         throw GenericException(exception);
//     }
// 
//     // (We know it is a valid pointer, otherwise an exception would have been thrown above.)
//     XML_ParserFree(parser);
}

bool ExpatParser::initialiseImpl(void)
{
    return true;
}

void ExpatParser::cleanupImpl(void)
{}

void ExpatParser::startElement(void* data, const char* element, const char** attr)
{
    XMLHandler* handler = static_cast<XMLHandler*>(data);
    XMLAttributes attrs;

    for(size_t i = 0 ; attr[i] ; i += 2)
        attrs.add(attr[i], attr[i+1]);

    handler->elementStart(element, attrs);
}

void ExpatParser::endElement(void* data, const char* element)
{
    XMLHandler* handler = static_cast<XMLHandler*>(data);
    handler->elementEnd(element);
}

void ExpatParser::characterData(void *data, const char *text, int len)
{
    XMLHandler* handler = static_cast<XMLHandler*>(data);
    String str(text, static_cast<String::size_type>(len));
    handler->text(str);
}

} // End of  CEGUI namespace section
